import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  logoPageName = 'DrewMet'
  logoOwnerName = 'ANTON PAULAU'
  menuHome = 'Home'
  menuInformation = 'Information'
  menuPaymentAndDelivery = 'Payment and delivery'
  menuAboutUs = 'About us'
  menuLumber = 'Lumber'
  menuEdgedLumber = 'Edged lumber'
  menuUnEdgedLumber = 'Unedged lumber'
  menuPalletBlank = 'A pallet blank'
  menuSplitFirewood = 'Split firewood'
  menuSlabSawdust = 'Slab/Sawdust'
  menuGallery = 'Gallery'
  menuContacts = 'Contacts'
  menuLanguage = 'Languages'
  languageEnglish = 'English'
  languagePolish = 'Polski'
  languageRussian = 'Русский'

  constructor(public translate: TranslateService) {
  }
}
