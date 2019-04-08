import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from "ng2-file-upload";
import { ActivatedRoute } from '@angular/router';
import { PhotoUploadService } from "./photo-upload.service";

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  public uploader: FileUploader;
  // private uploadURL = "https://dev.inclusion-restaurant.fr/api/pages/";
  private uploadURL: string = "http://localhost:8000/api/pages/";

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoUploadService
  ) {
  }

  ngOnInit() {
    this.uploadURL += this.route.snapshot.paramMap.get('url') + "/upload";
    this.uploader = new FileUploader({ url: this.uploadURL, itemAlias: 'photo' });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }


}
