import {Component, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  title = 'Six Degrees of Animation';
  graphData: any = {};
  options: any = {
    nodes: {
      borderWidth: 4,
      size: 30,
      color: {
        border: '#222222',
        background: '#666666'
      },
      font: {color: '#eeeeee'}
    },
    edges: {
      color: 'lightgray'
    }
  };

  constructor() { }

  ngAfterContentInit() {
    const dir = '../img/indonesia/';
    const nodes = [
      {id: 1,  shape: 'circularImage', image: dir + '1.png'},
      {id: 2,  shape: 'circularImage', image: dir + '2.png'},
      {id: 3,  shape: 'circularImage', image: dir + '3.png'},
      {id: 4,  shape: 'circularImage', image: dir + '4.png', label: 'pictures by this guy!'},
      {id: 5,  shape: 'circularImage', image: dir + '5.png'},
      {id: 6,  shape: 'circularImage', image: dir + '6.png'},
      {id: 7,  shape: 'circularImage', image: dir + '7.png'},
      {id: 8,  shape: 'circularImage', image: dir + '8.png'},
      {id: 9,  shape: 'circularImage', image: dir + '9.png'},
      {id: 10, shape: 'circularImage', image: dir + '10.png'},
      {id: 11, shape: 'circularImage', image: dir + '11.png'},
      {id: 12, shape: 'circularImage', image: dir + '12.png'},
      {id: 13, shape: 'circularImage', image: dir + '13.png'},
      {id: 14, shape: 'circularImage', image: dir + '14.png'},
      {
        id: 15, shape: 'circularImage', image: dir + 'missing.png',
        brokenImage: dir + 'missingBrokenImage.png', label: 'when images\nfail\nto load'
      },
      {id: 16, shape: 'circularImage', image: dir + 'anotherMissing.png', brokenImage: dir + '9.png', label: 'fallback image in action'}
    ];

    // create connections between people
    // value corresponds with the amount of contact between two people
    const edges = [
      {from: 1, to: 2},
      {from: 2, to: 3},
      {from: 2, to: 4},
      {from: 4, to: 5},
      {from: 4, to: 10},
      {from: 4, to: 6},
      {from: 6, to: 7},
      {from: 7, to: 8},
      {from: 8, to: 9},
      {from: 8, to: 10},
      {from: 10, to: 11},
      {from: 11, to: 12},
      {from: 12, to: 13},
      {from: 13, to: 14},
      {from: 9, to: 16}
    ];

    // provide the data in the vis format
    this.graphData.nodes = nodes;
    this.graphData.edges = edges;
  }
}
