import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";
import { API_ROOT } from "./constants";
import localStorageMock from "./__mocks__/localStorage";

axios.defaults.host = API_ROOT;
axios.defaults.adapter = httpAdapter;

window.localStorage = localStorageMock;
