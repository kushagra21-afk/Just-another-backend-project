import { faker } from "@faker-js/faker";
import { Factory } from "rosie";
import { Types } from "../../models/cart";

export const ProductFactory = new Factory<Types>()
    .attr("id", faker.number.int({ min: 1, max: 1000 }))
    .attr("customerId", faker.number.int())
  