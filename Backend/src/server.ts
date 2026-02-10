import app from "./app";
import { AppDataSource } from "./database/data-source";

// AppDataSource.initialize()
//     .then(() => {
//         console.log("✅ Database connected");
//         app.listen(3000, () => console.log("🚀 Server running on port 3000"));
//     })
//     .catch((err) => console.error("Error connecting to DB", err));

const inicializar = async () => {
    try {
        await AppDataSource.initialize()
        console.log("✅ Database connected");
        app.listen(3000, () => console.log("🚀 Server running on port 3000"));
    } catch (e) {
        console.error("Error connecting to DB", e)
    }
}
inicializar()