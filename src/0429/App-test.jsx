import { scale } from "motion"


export default function Rotate() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    margin: 100,
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

