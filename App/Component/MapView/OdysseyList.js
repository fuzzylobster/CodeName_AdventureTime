import React, { Component } from "react";
import { ListView } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  List,
  ActionSheet,
  ListItem,
  Text
} from "native-base";
const datas = [""];
export default class OdysseyList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: this.props.list.markerLocations
    };
    console.log(this.state.listViewData);
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.props.list.markerLocations];
    newData.splice(rowId, 1);
    this.props.deleteMarker(newData);
    //this.setState({ listViewData: this.props.list.markerLocations });
  }
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return (
      <Container>
        <Header />
        <Content>
          <List
            enableEmptySections={true}
            dataSource={this.ds.cloneWithRows(this.props.list.markerLocations)}
            renderRow={data => (
              <ListItem>
                <Text> {data.name} </Text>
              </ListItem>
            )}
            renderLeftHiddenRow={data => (
              <Button full onPress={() => alert(JSON.stringify(data))}>
                <Icon active name="information-circle" />
              </Button>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
              >
                <Icon active name="trash" />
              </Button>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
          <Button>
            <Text>Start Your Odyssey</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
