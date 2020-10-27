import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import * as ace from "ace-builds";

@Component({
  selector: "app-root",
  template: `
    <div
      class="app-ace-editor"
      #editor
      style="width: 500px;height: 250px;"
    ></div>
  `,
  styles: [
    `
      .app-ace-editor {
        border: 2px solid #f8f9fa;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      }
    `,
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("editor") private editor: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set(
      "basePath",
      "https://unpkg.com/ace-builds@1.4.12/src-noconflict"
    );
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");
    aceEditor.setTheme("ace/theme/twilight");
    aceEditor.session.setMode("ace/mode/html");
    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });
  }
}
