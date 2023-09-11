import Stripe from "stripe";

export default class PaymentService {
    constructor() {
        this.stripe = new Stripe("sk_test_51NpADzLoleB0c4uXJtObz4Dcb47Spotg9zHeYCsuhMCuMW1jQPq0omIzXqqnKm38Y6ITm8xvqBv8HhNTqgNXkulS00a6VDdonk");
    }

    createPaymentIntent = async (data) => {
        const paymentIntent = this.stripe.paymentIntents.create(data);
        return paymentIntent;
    }
}