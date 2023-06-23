const Cars = {template:`

<div>
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#modal"
@click="addClick()">
    Dodaj Samochód
</button>

<table class="table" >
    <thead>
        <tr>
            <th>
                Id
            </th>
            <th>
                Brand
            </th>
            <th>
                Model
            </th>
            <th>
                Engine
            </th>
            <th>
                ProductYear
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="car in cars" :key="car.id">
            <td>{{car.id}}</td>
            <td>{{car.brand}}</td>
            <td>{{car.model}}</td>
            <td>{{car.engine}}</td>
            <td>{{car.productYear}}</td>


            <td>
            <button type="button"
            class="btn btn-success mr-1"
            data-bs-toggle="modal"
            data-bs-target="#modal"
            @click="editClick(car)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button"
            class="btn btn-danger mr-1" @click="deleteClick(car.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
            </button>
        </td>
        </tr>

    </tbody>
</table>

<div class="modal fade" id="modal" tabindex="-1"
    aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">  
                <h5 class="modal-title" id="modalLabel">{{modalTitle}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <span class="input-group-text">Brand</span>
                    <input type="text" class="form-control" v-model="CarBrand">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Model</span>
                    <input type="text" class="form-control" v-model="CarMODEL">
                </div>
                <div class="input-group mb-3">  
                    <span class="input-group-text">Rok Produkcji</span>
                    <input type="text" class="form-control" v-model="CarProductYear">
                </div>
                <div class="input-group mb-3">  
                    <span class="input-group-text">Silnik</span>
                    <input type="text" class="form-control" v-model="CarEngine">
                </div>
                <button type="button" @click="updateClick()"
                v-if="CarId!=0" class="btn btn-primary">
                Zaktualizuj 
            </button>
                <button type="button" @click="createClick()"
                    v-if="CarId==0" class="btn btn-primary">
                    Utwórz
                </button>
               
            </div>
        </div>
    </div>
</div>
</div>
`,

data(){
    return{
        cars:[ ],
            modalTitle:"",
            CarId: 0,
            CarBrand:"",
            CarMODEL:"",
            CarProductYear:"",
            CarEngine:""
        
    };

   

},



methods: {
    async refreshData() {
       
       result=  axios.get(variables.API_URL + "Cars")
      
    
        .then((response) => {
           
          this.cars = response.data
          console.log(response.data)
          
        });
    },
    addClick() {
      console.log(this.CarId);
      this.modalTitle = "Dodaj Samochód";
      
      this.CarBrand = "";
      this.CarMODEL = "";
      this.CarProductYear = "";
      this.CarEngine = "";
    },
    editClick(car) {
      console.log(car);
      this.modalTitle = "Edytuj Samochód";
      this.CarId = car.id;
      this.CarBrand = car.brand;
      this.CarMODEL = car.model;
      this.CarProductYear = car.productYear;
      this.CarEngine = car.engine;
    },
    createClick() {
     console.log("Działa");
      axios.post(variables.API_URL + "Cars", {
        brand: this.CarBrand,
        model: this.CarMODEL,
        productYear: this.CarProductYear,
        engine: this.CarEngine
      })
      
        .then(() => {
          this.refreshData();
        });
    },
    updateClick() {
      axios.put(variables.API_URL + "Cars/" + this.CarId, {
        id: this.CarId,
        brand: this.CarBrand,
        model: this.CarMODEL,
        productYear: this.CarProductYear,
        engine: this.CarEngine
      })
        .then(() => {
          this.refreshData();
          alert("Zaktualizowano");
          
        });
    },
    deleteClick(id) {
      if (!confirm("Czy jesteś pewny usunięcia?")) {
        return;
      }
      axios.delete(variables.API_URL + "Cars/" + id)
        .then(() => {
          this.refreshData();
          alert("Samochód został usunięty.");
        });
    },
    
},
mounted: function () {
    this.refreshData();
  }
}