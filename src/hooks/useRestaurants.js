import {useState} from "react"

export default () => {



    const searcRestarurants = async () => {
        
        const [results, setResults] = useState()
        
        const response = await yelp.get("/search", {
            params: {
                limit:15,
                term:"Desert",
                location:"Toronto"
             }
        })
        console.log(response);
    }
}