import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {materialVersion, VersionInfo} from './version';
import {Observable} from 'rxjs';

const versionUrl = 'https://material.angular.io/assets/versions.json';

@Component({
  selector: 'version-picker',
  templateUrl: './version-picker.html'
})
export class VersionPicker {
  /** The currently running version of Material. */
  materialVersion = materialVersion;
  /** The possible versions of the doc site. */
  docVersions: Observable<VersionInfo[]>;

  constructor(private http: HttpClient) {
    this.docVersions = this.http.get<VersionInfo[]>(versionUrl);
  }

  /**
   * Updates the window location if the selected version is a different version.
   * @param version data for use in navigating to the version's path
   */
  onVersionChanged(version: VersionInfo) {
    if (!version.url.startsWith(window.location.href)) {
      window.location.assign(version.url);
    }
  }
}
