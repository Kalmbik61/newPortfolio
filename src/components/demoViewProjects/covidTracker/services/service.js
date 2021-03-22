import numeral from "numeral";

export default class Services {
  constructor() {
    this._apiBase = "https://disease.sh/v3/covid-19/";
  }

  getRes = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status : ${res.status}`);
    }
    return await res.json();
  };

  getWorldwide = async () => {
    const res = await this.getRes("all");
    return res;
  };

  getCountriesData = async () => {
    const res = await this.getRes("countries");
    return res;
  };
  getCountry = async (country) => {
    const res = await this.getRes(`countries/${country}`);
    return res;
  };
  //sort table data
  sortData = (data) => {
    return [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));
  };
  printStat = (stat) => (stat ? `+ ${numeral(stat).format("0.0a")}` : "+0");
  tableStat = (stat) => numeral(stat).format("0,0");
}
