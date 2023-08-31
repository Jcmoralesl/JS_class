const taskSchema = {
    title: {
        type: String,
        required: true,
    },
    description: String,
    deadline: {
        type : Date ,
        required: true,
        default: new Date ()
    },
    done: {
        type: Boolean,
        default: false
    } 
    
}