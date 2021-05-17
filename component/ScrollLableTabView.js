var ScrollableTabView = require('react-native-scrollable-tab-view');

var ScrollableTabView = React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    );
  }
});
export default ScrollableTabView;
