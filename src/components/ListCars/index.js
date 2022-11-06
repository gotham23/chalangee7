import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListCars } from "../../actions/carsAction"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DateCar(hasil) {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    hasil = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    return hasil
}


function ListCars({ jumlahpenumpang, tipedriver, tanggal, waktu }) {
    const { getListCarsResult, getListCarsLoading, getListCarsError } = useSelector((state) => state.CarsReducer)
    const dispatch = useDispatch()
    const jumlah = jumlahpenumpang;
    const tipe = tipedriver === 'true' ? true : false
    let d = (`${tanggal}T${waktu}`);
    let formdate = Date.parse(d);


    useEffect(() => {
        console.log("1. use effect component did mount");
        dispatch(getListCars())

    }, [dispatch])

    return (
        <div className="container-fluid" style={{ marginLeft: "5%", marginRight: "5%" }}>
            <div className="row d-flex justify-content-center" id="cars-container">
                {getListCarsResult ? (
                    getListCarsResult.filter((car) => car.capacity >= jumlah && car.available === tipe && Date.parse(DateCar(car.availableAt)) > formdate
                    ).map((car) => {
                        return (
                            <div className="col-sm-4 col-sm-4 col-sm-4 mt-3" id="card-car" key={car.id}>
                                <div className="card" style={{ width: "330px" }} >
                                    <div className="card-body" style={{ marginLeft: "0px" }}>
                                        <div>
                                            <img src={car.image} alt="/" style={{ height: "210px", width: "290px" }} />
                                        </div>
                                        <p style={{ fontWeight: "bold", marginTop: "20px" }}>{car.model} / {car.type}</p>
                                        <p style={{ fontWeight: "bold" }}>{car.rentPerDay}/ hari</p>
                                        <p style={{ height: "75px" }}>{car.description}</p>
                                        <div className="row">
                                            <div className="col-sm-8"><p><img src="img/fi_users.png" alt="/" />&nbsp;{car.capacity} orang</p></div>
                                            <div className="col-sm-8"><p><img src="img/fi_settings.png" alt="/" />&nbsp;{car.transmission}</p></div>
                                            <div className="col-sm-8"><p><img src="img/fi_calendar.png" alt="/" /> Tahun&nbsp;{car.year}</p></div>
                                        </div>
                                        <p>Mobil Tersedia pada:
                                        <p>{car.availableAt}</p>
                                        </p>
                                        
                                        <div className="btn-success btn-lg"><center>Pilih Mobil</center></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : getListCarsLoading ? (
                    <p>Loading . . . </p>
                ) : (
                    <p>{getListCarsError ? getListCarsError : "Data Kosong"}</p>
                )}
            </div>
        </div>
    );
}

export default ListCars