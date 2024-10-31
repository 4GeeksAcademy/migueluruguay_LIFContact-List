import { Navigate } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			info: "Información en flux!",
			contacts: [], //Lista de Contactos
			contact: {
				full_name: "",
				email: "",
				phone: "",
				address: ""

			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			changeInfo: (text) => {
				setStore({ info: text })
			},
			//Función y Método para obtener los contactos que ya he creado.
			getContacts: () => {
				fetch('https://playground.4geeks.com/contact/agendas/Campeones1950')
					.then((response) => response.json())

					.then((data) => {
						console.log(data);
						setStore({ contacts: data.contacts });

					})
					.catch((error) => {
						console.error("Hubo un error al obtener los contactos:", error);

					})
			},
			//Actualizar campos individuales contacto en el store
			updateContactField: (field, value) => {
				const store = getStore();
				setStore({
					contact: { ...store.contact, [field]: value }
				});
			},

			//Crear un nuevo contacto
			addContact: (newContact, navigate) => {
				fetch(' https://playground.4geeks.com/contact/agendas/Campeones1950/contacts', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: newContact.name,
						phone: newContact.phone,
						email: newContact.email,
						address: newContact.address
					})
				})
					.then((response) => {
						if (!response.ok) throw new Error("Error al crear el nuevo contacto");
						return response.json();
					})
					.then((data) => {
						console.log("Nuevo contacto creado:", data);
						getActions().getContacts();

						navigate("/");
					})
					.catch((error) => {
						console.error("Hay un error al crear el contacto:", error);
					});
			},
			//Eliminar Contacto

			deleteContact: (contactId) => {
				const store = getStore();

				fetch(`https://playground.4geeks.com/contact/agendas/Campeones1950/contacts/${contactId}`, {
					method: "DELETE",
				})
					.then((response) => {
						if (!response.ok) {
							console.error("Error al eliminar el contacto", response.status, response.statusText);
							throw new Error("Error al borrar contacto");
						}
						return response;
					})
					.then(() => {
						const updatedContacts = store.contacts.filter(contact => contact.id !== contactId);
						setStore({ contacts: updatedContacts });

						console.log("Contacto Eliminado con éxito");
					})
					.catch((error) => {
						console.error("Error al elminiar el contacto:", error);
					})

			},

			//Editar Contacto
			editContact: (editContact, navigate, Id) => {
				fetch("https://playground.4geeks.com/contact/agendas/Campeones1950/contacts/" + Id,
					{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							name: editContact.name,
							phone: editContact.phone,
							email: editContact.email,
							address: editContact.address
						})
					}

				)
					.then((response) => {
						if (!response.ok) throw new Error("Error al editar el nuevo contacto");
						return response.json();
					})
					.then((data) => {
						console.log("Contacto editado:", data);
						getActions().getContacts();

						navigate("/");
					})
					.catch((error) => {
						console.error("Hay un error al editar el contacto:", error);
					});

			}

		}

	};
};

export default getState;
