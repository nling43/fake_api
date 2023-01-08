const express = require("express");

const app = express();
app.use(express.json());
app.use(require("body-parser").json());
const PORT = process.env.PORT || 3000;

const carpenterOrders = [
	{
		OrderNumber: "2022-12-21-11",
		expectHours: 5,
	},
	{
		OrderNumber: "2022-12-22-12",
		expectHours: 4,
	},
	{
		OrderNumber: "2022-12-23-13",
		expectHours: 9,
	},
	{
		OrderNumber: "2022-12-24-14",
		expectHours: 20,
	},
];
const blacksmithOrders = [
	{
		OrderNumber: "2022-22-21-11",
		expectHours: 11,
	},
	{
		OrderNumber: "2022-22-22-12",
		expectHours: 8,
	},
	{
		OrderNumber: "2022-22-23-13",
		expectHours: 15,
	},
	{
		OrderNumber: "2022-22-24-14",
		expectHours: 12,
	},
];
const deliveryOrders = [
	{
		OrderNumber: "2022-32-21-11",
		expectHours: 4,
		address: "Glasbruksvagen 32",
		contact: ["Ingvor Svensson", "070604502"],
	},
	{
		OrderNumber: "2022-32-22-12",
		expectHours: 5,
		address: "Gustav III:s vag 28",
		contact: ["Viveka Lindberg", "070604502"],
	},
	{
		OrderNumber: "2022-32-23-13",
		expectHours: 3,
		address: "Kilbacksgatan 36",
		contact: ["Hildegard Nilsson", "070604502"],
	},
	{
		OrderNumber: "2022-32-24-14",
		expectHours: 4,
		address: "Vargatan 2",
		contact: ["Jacob Nordström", "070604502"],
	},
];
const products = [
	{
		count: 10,
		id: "1192173",
		name: "Utbildningsbord Hopfällbart",
		OrderNumber: "2022-32-21-11",
	},
	{
		count: 5,
		id: "1175536",
		name: "Kontorsstol Plus 8 hög rygg",
		OrderNumber: "2022-32-21-11",
	},
	{
		count: 1,
		id: "1190278",
		name: "Öppen förvaring 4xA4",
		OrderNumber: "2022-2-21-11",
	},
	{
		count: 10,
		id: "1192173",
		name: "Utbildningsbord Hopfällbart",
		OrderNumber: "2022-12-21-11",
	},
	{
		count: 5,
		id: "1175536",
		name: "Kontorsstol Plus 8 hög rygg",
		OrderNumber: "2022-12-21-11",
	},
	{
		count: 1,
		id: "1190278",
		name: "Öppen förvaring 4xA4",
		OrderNumber: "2022-12-21-11",
	},
	{
		count: 10,
		id: "1192173",
		name: "Utbildningsbord Hopfällbart",
		OrderNumber: "2022-22-21-11",
	},
	{
		count: 5,
		id: "1175536",
		name: "Kontorsstol Plus 8 hög rygg",
		OrderNumber: "2022-22-21-11",
	},
	{
		count: 1,
		id: "1190278",
		name: "Öppen förvaring 4xA4",
		OrderNumber: "2022-22-21-11",
	},
	{
		count: 2,
		id: "1192028",
		name: "Soffbord runt",
		OrderNumber: "2022-32-22-12",
	},
	{
		count: 3,
		id: "1192224",
		name: "Whiteboard Mood Wall glas",
		OrderNumber: "2022-32-22-12",
	},
	{
		count: 1,
		id: "1192337",
		name: "Konferensbord Slim Table Plus",
		OrderNumber: "2022-32-22-12",
	},
	{
		count: 2,
		id: "1192028",
		name: "Soffbord runt",
		OrderNumber: "2022-22-22-12",
	},
	{
		count: 3,
		id: "1192224",
		name: "Whiteboard Mood Wall glas",
		OrderNumber: "2022-22-22-12",
	},
	{
		count: 1,
		id: "1192337",
		name: "Konferensbord Slim Table Plus",
		OrderNumber: "2022-22-22-12",
	},

	{
		count: 2,
		id: "1192028",
		name: "Soffbord runt",
		OrderNumber: "2022-12-22-12",
	},
	{
		count: 3,
		id: "1192224",
		name: "Whiteboard Mood Wall glas",
		OrderNumber: "2022-12-22-12",
	},
	{
		count: 1,
		id: "1192337",
		name: "Konferensbord Slim Table Plus",
		OrderNumber: "2022-12-22-12",
	},
	{
		count: 2,
		id: "1191634",
		name: "Karmstol Öland",
		OrderNumber: "2022-32-23-13",
	},
	,
	{
		count: 1,
		id: "1191334",
		name: "Matbord / Konferenssbord runt",
		OrderNumber: "2022-32-23-13",
	},
	{
		count: 2,
		id: "1191634",
		name: "Karmstol Öland",
		OrderNumber: "2022-22-23-13",
	},
	,
	{
		count: 1,
		id: "1191334",
		name: "Matbord / Konferenssbord runt",
		OrderNumber: "2022-22-23-13",
	},
	{
		count: 2,
		id: "1191634",
		name: "Karmstol Öland",
		OrderNumber: "2022-12-23-13",
	},
	,
	{
		count: 1,
		id: "1191334",
		name: "Matbord / Konferenssbord runt",
		OrderNumber: "2022-12-23-13",
	},
	{
		count: 10,
		id: "1192173",
		name: "Utbildningsbord Hopfällbart",
		OrderNumber: "2022-22-24-14",
	},
	{
		count: 5,
		id: "1175536",
		name: "Kontorsstol Plus 8 hög rygg",
		OrderNumber: "2022-22-24-14",
	},
	{
		count: 1,
		id: "1190278",
		name: "Öppen förvaring 4xA4",
		OrderNumber: "2022-22-24-14",
	},

	{
		count: 2,
		id: "1192028",
		name: "Soffbord runt",
		OrderNumber: "2022-22-24-14",
	},
	{
		count: 3,
		id: "1192224",
		name: "Whiteboard Mood Wall glas",
		OrderNumber: "2022-22-24-14",
	},
	{
		count: 1,
		id: "1192337",
		name: "Konferensbord Slim Table Plus",
		OrderNumber: "2022-22-24-14",
	},

	{
		count: 2,
		id: "1191634",
		name: "Karmstol Öland",
		OrderNumber: "2022-22-24-14",
	},
	,
	{
		count: 1,
		id: "1191334",
		name: "Matbord / Konferenssbord runt",
		OrderNumber: "2022-22-24-14",
	},
	,
	{
		count: 10,
		id: "1192173",
		name: "Utbildningsbord Hopfällbart",
		OrderNumber: "2022-12-24-14",
	},
	{
		count: 5,
		id: "1175536",
		name: "Kontorsstol Plus 8 hög rygg",
		OrderNumber: "2022-12-24-14",
	},
	{
		count: 1,
		id: "1190278",
		name: "Öppen förvaring 4xA4",
		OrderNumber: "2022-12-24-14",
	},

	{
		count: 2,
		id: "1192028",
		name: "Soffbord runt",
		OrderNumber: "2022-12-24-14",
	},
	{
		count: 3,
		id: "1192224",
		name: "Whiteboard Mood Wall glas",
		OrderNumber: "2022-12-24-14",
	},
	{
		count: 1,
		id: "1192337",
		name: "Konferensbord Slim Table Plus",
		OrderNumber: "2022-12-24-14",
	},

	{
		count: 2,
		id: "1191634",
		name: "Karmstol Öland",
		OrderNumber: "2022-12-24-14",
	},
	,
	{
		count: 1,
		id: "1191334",
		name: "Matbord / Konferenssbord runt",
		OrderNumber: "2022-12-24-14",
	},
	{
		count: 3,
		id: "1192224",
		name: "Whiteboard Mood Wall glas",
		OrderNumber: "2022-12-24-14",
	},
	{
		count: 1,
		id: "1192337",
		name: "Konferensbord Slim Table Plus",
		OrderNumber: "2022-32-24-14",
	},

	{
		count: 2,
		id: "1191634",
		name: "Karmstol Öland",
		OrderNumber: "2022-32-24-14",
	},
	,
	{
		count: 1,
		id: "1191334",
		name: "Matbord / Konferenssbord runt",
		OrderNumber: "2022-32-24-14",
	},
];

const carpenterMaterial = [
	{ id: 0, name: "Jerseytyg", unit: "m" },
	{ id: 1, name: "Muslintyg", unit: "m" },
	{ id: 2, name: "Flanelltyg", unit: "m" },
	{ id: 3, name: "Bomullstyg", unit: "m" },
	{ id: 4, name: "Seratshirttyg", unit: "m" },
	{ id: 5, name: "Manchestertyg", unit: "m" },
];
const blacksmithMaterial = [
	{ id: 0, name: "Plywood", unit: "m" },
	{ id: 1, name: "Ask", unit: "m" },
	{ id: 2, name: "Bok", unit: "m" },
	{ id: 3, name: "Valnöt", unit: "m" },
];

app.get("/orders", (req, res) => {
	///orders?id=delivery
	switch (req.query.role.toLowerCase()) {
		case "tapetserare":
			res.json(carpenterOrders);
			break;
		case "snickare":
			res.json(blacksmithOrders);
			break;

		case "leverans":
			res.json(deliveryOrders);
			break;
		default:
			res.status(404).send("Not Found");
	}
});

app.get("/contact", (req, res) => {
	deliveryOrders.forEach((element) => {
		if (element.OrderNumber === req.query.id) res.send(element.contact);
	});
	res.status(404).send("Not Found");
});

app.get("/products", (req, res) => {
	const list = [];
	products.forEach((product) => {
		if (product.OrderNumber === req.query.id) list.push(product);
	});
	res.send(list);
});

app.get("/material", (req, res) => {
	switch (req.query.role.toLowerCase()) {
		case "tapetserare":
			res.json(carpenterMaterial);
			break;
		case "snickare":
			res.json(blacksmithMaterial);
			break;

		default:
			res.status(404).send("Not Found");
	}
});

app.listen(PORT, () => console.log("Running @ " + PORT));
