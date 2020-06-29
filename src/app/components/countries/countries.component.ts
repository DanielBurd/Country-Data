import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { CountryModel } from 'src/app/models/country.model';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
    public countries:CountryModel[];
    public showCountris:CountryModel[]; // array which is affected by the search parameters and is derived from the original array of countries
    public containsStr:string; // input value with two way data binding
    
  constructor(private myCountriesService:CountriesService) { }

   ngOnInit() {
      this.containsStr='';
        setTimeout(async()=>{
            try{
                this.countries=await this.myCountriesService.getAllCountriesAsync(); // call for the server
                this.showCountris=[...this.countries]; // shows all the coutnries at first
                
                
              }
              catch(err){
                alert(err.message);
              }
        },2000);
      
      
  }


  public filterCountires(){
   this.showCountris=this.countries
   .filter(ctr=>ctr.name.toLowerCase().includes(this.containsStr.toLowerCase()) 
   || ctr.capital.toLowerCase().includes(this.containsStr.toLowerCase())); // chekcs if capital or name contains string afters its lowercased and puts it in the showArray
   
  }
   
}
