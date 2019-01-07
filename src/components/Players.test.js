import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Players from './Players';

const datas = [
  {
    _id: '5c2fdec7f2b003a797b9e4ae',
    guid: '0463ebb8-3113-44dc-849b-efe111ce3d57',
    isActive: true,
    picture: 'http://placehold.it/32x32',
    age: 34,
    goals: 40,
    assists: 81,
    eyeColor: 'brown',
    name: {
      first: 'Meadows',
      last: 'Wooten',
    },
    height: 178,
    weight: 115,
    team: 'EMTRAK',
    stick: 'left',
  },
];

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(
      shallow(<Players players={datas} />).contains(
        <div class="players">
          <h2>Number of players: 1</h2>
          <div key="1">
            <img
              src="http://placehold.it/32x32"
              className="player-picture"
              alt="Meadows"
            />
            Meadows Wooten - goals: 40 - assists: 81
          </div>
        </div>,
      ),
    ).toBe(true);
  });

  /*it('should be selectable by class "foo"', function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Foo />).text()).toEqual('Bar');
  });*/
});
