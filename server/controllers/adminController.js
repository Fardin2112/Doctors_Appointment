import validator from "validator";

// API for adding doctors
const addDoctor = async (req, res) => {
    try {
        console.log("working API");
        const { name,email, password, speciality, degree, experience, about, fees } = req.body;
        const imageFile = req.file;

        console.log({name,email, password, speciality, degree, experience, about, fees},imageFile);

        // checking for all data to add doctors
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !imageFile) {
            return res.json({success:false,message:"Missing Details for add Doctor"})
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email "})
        }

        res.status(200).json({ message: "Doctor added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

export { addDoctor };
