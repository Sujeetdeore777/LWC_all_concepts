import { LightningElement } from '@lwc/engine-dom';

export default class CompositionIteration extends LightningElement {
    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
            Phone: '6172559632',
            Picture__c:
                'https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/people/amy_taylor.jpg'
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'VP of Sales',
            Phone: '6172551122',
            Picture__c:
                'https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/people/michael_jones.jpg'
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO',
            Phone: '6172558877',
            Picture__c:
                'https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/people/jennifer_wu.jpg'
        }
    ];
}
