import EErrors from "../../services/errors/enum.js";
export default (error, req, res, next) => {
    console.log(error.cause);
    switch (error.cause) {
        case EErrors.INVALID_TYPES_ERROR:
            res.send({ status: "error", error: error.name });
            break;
        default:
            res.send({ status: "error", error: "Unhandled error" });
    }
}