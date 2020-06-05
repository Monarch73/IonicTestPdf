import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.scss'],
})
export class DocviewerComponent implements OnInit {

  constructor(private document: DocumentViewer, private file: File, private transfer: FileTransfer) { }

  ngOnInit() {
    alert('test');
  }

  public openLocalPdf(){
    const options: DocumentViewerOptions = {
      title: 'moep'
    };

    this.document.canViewDocument('assets/sample.pdf', 'application/pdf', options);
  }

}
