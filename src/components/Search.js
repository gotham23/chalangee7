import ListCars from './ListCars';
import * as React from 'react';

function refreshPage() {
  window.location.reload();
}

class Search extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = { tipedriver: '', jumlahpenumpang: '', tanggal: '', waktu: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.data = this.data.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  data(event) {
    event.preventDefault();
    const dataa = [this.state.jumlahpenumpang, this.state.tipedriver, this.state.tanggal, this.state.waktu];

    return dataa;
  }

  render() {
    return (
      <>
        <section id="cariMobil">
          <form onSubmit={this.handleSubmit}>
            <div className="container px-lg-5">
              <div className="row">
                <div className="d-lg-flex py-4 px-3 rounded-3 shadow bg-white">
                  <div className="col mt-2 mx-4">
                    <label className="label">Tipe Driver</label>
                    <select className="form-select" id="tipe-driver" name="tipedriver" value={this.state.value} onChange={this.handleChange} style={{ width: '95%' }}>
                      <option value="" selected disabled hidden>
                        Pilih Tipe Driver
                      </option>
                      <option value="true">Dengan Sopir</option>
                      <option value="false">Tanpa Sopir (Lepas Tangan)</option>
                    </select>
                  </div>
                  <div className="col mt-2">
                    <label className="label">Tanggal</label>
                    <div className="input-group" style={{ width: '95%' }}>
                      <input type="date" name="tanggal" value={this.state.tanggal} onChange={this.handleChange} className="form-control" id="select-tanggal" placeholder="Pilih Tanggal" />
                    </div>
                  </div>
                  <div className="col mt-2">
                    <label className="label">Waktu Jemput/Ambil</label>
                    <div className="input-group" style={{ width: '95%' }}>
                      <input type="time" name="waktu" value={this.state.waktu} onChange={this.handleChange} id="select-jam" className="form-control" placeholder="Pilih Tanggal" />
                    </div>
                  </div>

                  <div className="col mt-2">
                    <label className="label">Jumlah Penumpang</label>
                    <div className="input-group" style={{ width: '105%' }}>
                      <input type="number" id="select-jml" value={this.state.jumlahpenumpang} onChange={this.handleChange} name="jumlahpenumpang" className="form-control" placeholder="Jumlah Penumpang" />
                      <div className="input-group-text bg-white">
                        <img src="img/fi_users.png" alt="/" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="col mt-2 mx-2">
                      <button className="btn btn-sm btn-danger p-2 my-4 mx-3" onClick={refreshPage} id="clear-btn">
                        {' '}
                        Clear Mobil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>

        <ListCars submit={this.handleSubmit} data={this.data} jumlahpenumpang={this.state.jumlahpenumpang} tipedriver={this.state.tipedriver} tanggal={this.state.tanggal} waktu={this.state.waktu} />
      </>
    );
  }
}

export default Search;
