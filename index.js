const express = require("express");

const app = express();
app.use(express.json());
app.use(require("body-parser").json());
const PORT = process.env.PORT || 3000;

const carpenterOrders = [
	{
		OrderNumber: "carpenter 2022-22-21-11",
		Products: [
			{ id: "1", count: 1 },
			{ id: "2", count: 2 },
			{ id: "3", count: 5 },
		],
	},
	{
		OrderNumber: "carpenter 2022-22-22-12",
		Products: [
			{ id: "1", count: 1 },
			{ id: "2", count: 2 },
			{ id: "3", count: 7 },
		],
	},
	{
		OrderNumber: "carpenter 2022-22-23-13",
		Products: [
			{ id: "1", count: 8 },
			{ id: "2", count: 2 },
			{ id: "3", count: 1 },
		],
	},
	{
		OrderNumber: "carpenter 2022-22-24-14",
		Products: [
			{ id: "1", count: 6 },
			{ id: "2", count: 2 },
			{ id: "3", count: 8 },
		],
	},
];
const blacksmithOrders = [
	{
		OrderNumber: "blacksmith 2022-22-21-11",
		Products: [
			{ id: "1", count: 1 },
			{ id: "2", count: 2 },
			{ id: "3", count: 1 },
		],
	},
	{
		OrderNumber: "blacksmith 2022-22-22-12",
		Products: [
			{ id: "1", count: 1 },
			{ id: "2", count: 2 },
			{ id: "3", count: 8 },
		],
	},
	{
		OrderNumber: "blacksmith 2022-22-23-13",
		Products: [
			{ id: "1", count: 6 },
			{ id: "2", count: 2 },
			{ id: "3", count: 1 },
		],
	},
	{
		OrderNumber: "blacksmith 2022-22-24-14",
		Products: [
			{ id: "1", count: 3 },
			{ id: "2", count: 2 },
			{ id: "3", count: 1 },
		],
	},
];
const deliveryOrders = [
	{
		OrderNumber: "delivery 2022-22-21-11",
		expectHours: 1,
		Products: [
			{ id: "1", count: 1 },
			{ id: "2", count: 2 },
			{ id: "3", count: 1 },
		],
		address: "Glasbruksvagen 32",
		contact: ["Ingvor Svensson", "070604502"],
	},
	{
		OrderNumber: "delivery 2022-22-22-12",
		expectHours: 1,

		Products: [
			{ id: "1", count: 1 },
			{ id: "2", count: 2 },
			{ id: "3", count: 8 },
		],
		address: "Gustav III:s vag 28",
		contact: ["Viveka Lindberg", "070604502"],
	},
	{
		OrderNumber: "delivery 2022-22-23-13",
		expectHours: 1,

		Products: [
			{ id: "1", count: 6 },
			{ id: "2", count: 2 },
			{ id: "3", count: 1 },
		],
		address: "Kilbacksgatan 36",
		contact: ["Hildegard Nilsson", "070604502"],
	},
	{
		OrderNumber: "delivery 2022-22-24-14",
		expectHours: 1,

		Products: [
			{ id: "1", count: 3 },
			{ id: "2", count: 2 },
			{ id: "3", count: 1 },
		],
		address: "Vargatan 2",
		contact: ["Jacob Nordström", "070604502"],
	},
];
const products = [
	{ id: "1", name: "chair", expectHours: 5 },
	{ id: "2", name: "table", expectHours: 1 },
	{ id: "3", name: "tableleg", expectHours: 10 },
];

const carpenterMaterial = [
	{ id: 0, name: "cloth", unit: "m" },
	{ id: 1, name: "cloth1", unit: "m" },
	{ id: 2, name: "cloth2", unit: "m" },
	{ id: 3, name: "cloth3", unit: "m" },
];
const blacksmithMaterial = [
	{ id: 0, name: "metall", unit: "m" },
	{ id: 1, name: "metall1", unit: "m" },
	{ id: 2, name: "metall2", unit: "m" },
	{ id: 3, name: "metall3", unit: "m" },
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

app.get("/product", (req, res) => {
	///product?id=333
	products.forEach((element) => {
		if (element.id === req.query.id) res.send(element);
	});
	res.status(404).send("Not Found");
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
