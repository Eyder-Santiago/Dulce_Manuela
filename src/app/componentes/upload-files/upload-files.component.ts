import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFilesService } from '../../servicios/upload-files.service'

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent {
 // Variable to store shortLink from api response
 shortLink: string = "";
 loading: boolean = false; // Flag variable
 file: File; // Variable to store file

 // Inject service 
 constructor(private uploadFilesService: UploadFilesService) { }

 ngOnInit(): void {
 }

 // On file Select
 onChange(event:any) {
     this.file = event.target.files[0];
 }

 // OnClick of button Upload
 onUpload() {
     this.loading = !this.loading;
     console.log(this.file); //archivo que se seleccionó
     this.uploadFilesService.upload(this.file).subscribe(
         (event: any) => {
             if (typeof (event) === 'object') {

                 // Short link via api response
                 this.shortLink = event.link;

                 this.loading = false; // Flag variable 
             }
         }
     );
 }
}


