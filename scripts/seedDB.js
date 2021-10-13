import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from '../models';

mongoose.connect( process.env.DB_CONN );

const exchangeSeed = [
    {
        name: "Tardy Christmas 2021",
        participants: [
            {
                name: "Daniel",
                email: "",
                match: {
                    name: "Caleb",
                    year: 2021
                }
            },
            {
                name: "Emily Waters",
                email: "",
                match: {
                    name: "Kirk",
                    year: 2021
                }
            },
            {
                name: "Kirk",
                email: "",
                match: {
                    name: "Cameron",
                    year: 2021
                }
            },
            {
                name: "Andrea",
                email: "",
                match: {
                    name: "Emily Waters",
                    year: 2021
                }
            },
            {
                name: "Evan",
                email: "",
                match: {
                    name: "Angel",
                    year: 2021
                }
            },
            {
                name: "Kasey Jo",
                email: "",
                match: {
                    name: "Kristi",
                    year: 2021
                }
            },
            {
                name: "Cameron",
                email: "",
                match: {
                    name: "Andrea",
                    year: 2021
                }
            },
            {
                name: "Angel",
                email: "",
                match: {
                    name: "Sierra",
                    year: 2021
                }
            },
            {
                name: "Austin",
                email: "",
                match: {
                    name: "Daniel",
                    year: 2021
                }
            },
            {
                name: "Kristi",
                email: "",
                match: {
                    name: "Emily Brooke",
                    year: 2021
                }
            },
            {
                name: "Kyle",
                email: "",
                match: {
                    name: "Evan",
                    year: 2021
                }
            },
            {
                name: "Breanna",
                email: "",
                match: {
                    name: "Cameron",
                    year: 2021
                }
            },
            {
                name: "Kirk",
                email: "",
                match: {
                    name: "Cameron",
                    year: 2021
                }
            },
            {
                name: "Kirk",
                email: "",
                match: {
                    name: "Cameron",
                    year: 2021
                }
            },
            {
                name: "Kirk",
                email: "",
                match: {
                    name: "Cameron",
                    year: 2021
                }
            }
        ]
    }
]