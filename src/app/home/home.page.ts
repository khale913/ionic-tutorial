import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionSheetController: ActionSheetController) {}

  async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Custom Action Sheet',

      buttons: [
        {
          text: 'Cancel',
          role: 'destructive',
          handler: () => {
            console.log('Cancel button was clicked');
          },
        },
        {
          text: 'Click',
          role: 'destructive',
          handler: () => {
            console.log('Click button was clicked');
          },
        },
        {
          text: 'Submit',
          role: 'destructive',
          handler: () => {
            console.log('Submit button was clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
