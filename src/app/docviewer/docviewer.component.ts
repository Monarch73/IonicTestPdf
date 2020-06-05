import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.scss'],
})
export class DocviewerComponent implements OnInit {

  constructor(private document: DocumentViewer, private file: File, private transfer: FileTransfer, private choooser: FileChooser) { }

  private abc: string;

  ngOnInit() {
  }

  public chooose() {
    this.choooser.open()
    .then(uri => { console.log(uri); this.abc = uri; })
    .catch(e => console.log(e));
  }
  public openLocalPdf(){
    const options: DocumentViewerOptions = {
      title: 'moep'
    };

    this.document.viewDocument(this.abc, 'application/pdf', options);
  }

}
