import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID -hHiFcrZ4u1p8m1rx_0xUlcXARBbK0w5jH-pI7oKSvA",
    },
});
