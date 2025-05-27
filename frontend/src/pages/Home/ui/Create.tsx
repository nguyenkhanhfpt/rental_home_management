import { Link } from "react-router-dom"

export const Create = () => {
    return (
        <div>
            <h1>Create</h1>


            <div className="flex justify-start">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg d-inline-block">
                    <Link to="/home">Back to list</Link>
                </button>
            </div>
        </div>
    )
}