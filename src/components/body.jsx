import { useState, useEffect } from "react";

export default function Body() {
    const [searchTxt, setSearchTxt] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [DweatherData, setDWeatherData] = useState(null);

    const handleSearch = async () => {
        if (!searchTxt) return;
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=2a5b6d6f02964d368d585400233012&q=${searchTxt}`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
          try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2a5b6d6f02964d368d585400233012&q=Sri%20Lanka`);
            const data = await response.json();
            setDWeatherData(data);
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        };
    
        fetchWeatherData();
      }, []);

    return (
        <div>
            <div className="card text-center" style={{ position: 'relative' }}>
                <div className="card-body">
                    <img src="../../public/weather2.jpg" width="100%" height="300" alt="Weather background" />
                    {DweatherData&& (
                        <div className="weather-forecast" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', borderRadius: '5px' }}>
                            <h2>{DweatherData.location.name} Weather Forecast</h2>
                            <p>Temperature: {DweatherData.current.temp_c}°C</p>
                            <p>Condition: {DweatherData.current.condition.text}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-12 col-md-10 col-lg-8">
                    <form className="card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col">
                                <input
                                    id="searchTxt"
                                    className="form-control form-control-lg form-control-borderless"
                                    type="text"
                                    placeholder="Enter City"
                                    value={searchTxt}
                                    onChange={(e) => setSearchTxt(e.target.value)}
                                />
                            </div>
                            <div className="col-auto">
                                <button
                                    id="searchBtn"
                                    type="button"
                                    className="btn btn-lg btn-success"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {weatherData && (
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h1 id="temp" style={{ fontWeight: 700, textAlign: 'center' }}>{weatherData.current.temp_c}°C</h1>
                                <img id="img" src={weatherData.current.condition.icon} style={{ display: 'block', margin: 'auto' }} alt={weatherData.current.condition.text} className="mt-3" />
                                <h2 id="textSample" className="mt-3" style={{ fontWeight: 700, textAlign: 'center' }}>{weatherData.current.condition.text}</h2>
                                <h3 id="textCountry" className="mt-3" style={{ fontWeight: 700, textAlign: 'center' }}>{weatherData.location.country}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h1 id="time" style={{ fontWeight: 700, textAlign: 'center' }}>{weatherData.location.localtime}</h1>
                                <h2 id="textSample" className="mt-3" style={{ fontWeight: 700, textAlign: 'center' }}>{weatherData.location.tz_id}</h2>
                                <h3 id="textCountry" className="mt-3" style={{ fontWeight: 700, textAlign: 'center' }}>{weatherData.location.region}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
