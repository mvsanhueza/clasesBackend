import { Schema, model} from "mongoose";

const cartSchema = new Schema({
    products: {
        type: [
            {
                id_prod:{
                    type: Schema.Types.objectId,
                    ref: "products"
                },
                cant: Number
            }
        ],
        default: []
    }
})

export default cartModel = model(cartSchema, "cart");