import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer OJdQuatFiP-PvKJZfX8RoTS8DwWjDqkY-FYbDTZFByR6zvr4Lx2m--T7q8DpkVqyyGeeXAa9S-VUeAmOAei-7w2FwipfxduzAJnqOC9Vr0kiD-klmFYhWaEgaUY6YnYx"
    }
})