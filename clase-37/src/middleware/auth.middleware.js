const applyPolicy = (roles) => {
    return (req, res, next) => {

        if (roles[0].toUpperCase() === "PUBLIC") return next();
        const user = req.user;
        if (!user) return res.status(401).send({ status: 'error', error: "Not auth" });
        if (!roles.includes(user.role.toUpperCase())) return res.status(403).send({ status: 'error', error: "Not auth" });
        next();
    }
}

export default applyPolicy;