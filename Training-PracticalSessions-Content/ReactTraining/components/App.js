import React from 'react';
import StatelessApp from './statelessApp';
import StatefulApp from './StatefulApp';
import PropsDemo from './PropsDemo';
import ValidationApp from './ValidationApp';
import CompLifeCycle from './CompLifeCycle';
import SearchPage from './Searchpage';
import AbcRandom from './hoc';
import MusicStore from './MusicStore';
class App extends React.Component {
   render() {
      return (
         <div>
            Welcome to React world with Webpack by Ashish!
            {/*
            <StatelessApp show={false}/>
            <StatefulApp show={false}/>
            <PropsDemo show={false}/>
            <ValidationApp show={true}/>
            <CompLifeCycle />
            <SearchPage />
            <AbcRandom ctype="t2"/>
            */}
            <MusicStore />
         </div>
      );
   }
}
export default App;