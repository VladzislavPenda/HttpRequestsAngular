import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/common/config';
import { TestHttpService } from 'src/app/services/httpServices/testHttpService/test-http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [TestHttpService]
})
export class TestComponent implements OnInit {
  public config: Config | undefined;
  public headers: string[] | undefined;

  constructor(private testHttpService: TestHttpService) { }

  ngOnInit(): void {
    this.showConfigResponse();
  }

  private showConfigResponse() {
    this.testHttpService.getConfigResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys()
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`)
        this.config = resp.body!;
      })
  }
}
