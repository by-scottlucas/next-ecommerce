interface FooterLink {
  label: string;
  path: string;
}

interface FooterSection {
  title: string;
  list: FooterLink[];
}

interface FooterData {
  brandLogo: string;
  brandLogoLabel:string;
  brandDescription: string;
  sections: FooterSection[];
  bottomTitle: string;
}

export interface FooterProps {
  footerData: FooterData;
}
