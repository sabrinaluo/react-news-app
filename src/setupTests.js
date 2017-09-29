import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";
import { API_ROOT } from "./constants";

axios.defaults.host = API_ROOT;
axios.defaults.adapter = httpAdapter;
