import axios from "axios";
import { toast } from "react-toastify";

const request = axios.create({
    baseURL: "https://book-e-sell-node-api.vercel.app/",
    timeout:12400000,
    responseType: "json",
    
});
// https://book-e-sell-node-api.vercel.app/api/user/login
//"https://bookstore-sooty.vercel.app/"
//https://book-e-sell-node-api.vercel.app/

let requests = [];
let conflictRequest = "";

request.interceptors.request.use(
    async (config) => {
        if(config.headers) {
            config.headers["Content-Type"] = "application/json";
            config.headers["lang"] = 'en'
        }

        if(config.headers["isDisableLoader"] !== true){
            requests.push(config.url);
            showLoader();               
        }

        return config;
    },
    (error) => {
        alert(error);
        Promise.reject(error);
    }
);

//Response interceptors customize based on your need
request.interceptors.response.use(
    (response) => {
        const { data } = response;
        console.log("responseeee ", response);
        removeRequest(response.config.url);
        if(data?.code && data?.code !== 200) {
            toast.error(
                response.data.error ?? "Something went wrong..Please try again"
            );
            return Promise.reject(new Error(data?.error || "Error"));

        } else {
            return Promise.resolve(response.data.result);
        }
    },
    (error) => {
        removeRequest(error.config.url);
        toast.error(error?.response?.data?.error ?? "Something went wrong");
        return Promise.reject(error);
        
    }
);

function showLoader(){
    document.body.classList.add("loader-open");
}

function hideLoader(){
    document.body.classList.remove("loader-open");
}

function removeRequest(req) {
    const i = requests.indexOf(req);
    if(i>=0){
        requests.splice(i, 1);
    }
    if (requests.length > 0) {
        showLoader();
    } else {
        hideLoader();
    }
    if (req === conflictRequest) {
        conflictRequest = "";
        requests = requests.filter((request) => request !== req);
    }
}

export default request;