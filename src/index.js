import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import React from 'react';
import ReactDOM from 'react-dom';
import {QueryRenderer,graphql,commitMutation} from 'react-relay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import root from './environments/root';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import LinearProgress from 'material-ui/LinearProgress';
class App extends React.Component {
    componentWillMount(){
        this.state = {
            firstName:"",
            lastName:""
        }
    }
    deletePerson(id){
        const variables = {
            id : id
        };
        const mutation = graphql`
            mutation srcMutation($id:String!)
            {
                deletePerson(id:$id){
                    id,
                    deleted
                }
            }
        `;
        const configs = [{
            type: 'NODE_DELETE',
            deletedIDFieldName: 'id',
        }];
        const environment = root;
        commitMutation(
            environment,
            {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Success!')
            },
            onError: err => console.error(err),
            configs
            },
        );
    }
    createRandomPerson(){
        const mutation = graphql`
            mutation srcCreateRandomPersonMutation
            {
                createRandomPerson{
                    id,
                    firstName,
                    lastName,
                    avatar
                }
            }
        `;
        const environment = root;
        commitMutation(
            environment,
            {
            mutation,
            onCompleted: (response) => {
                console.log(response);
                console.log('Created!')
            },
            onError: err => console.error(err),
            updater : proxyStore => {
                const newEdgeNode = proxyStore.getRootField('createRandomPerson');
                const root = proxyStore.getRoot();
                const prevPeople = root.getLinkedRecords('people');
                prevPeople.push(newEdgeNode);
                root.setLinkedRecords(prevPeople,'people');
            }
            },
        );
    }
    create(){
        const variables = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        const mutation = graphql`
            mutation srcCreatePersonMutation($firstName:String!,$lastName:String!)
            {
                createPerson(firstName:$firstName,lastName:$lastName){
                    id,
                    firstName,
                    lastName,
                    avatar
                }
            }
        `;
        const environment = root;
        commitMutation(
            environment,
            {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log(response);
                console.log('Created!')
            },
            onError: err => console.error(err),
            updater : proxyStore => {
                const newEdgeNode = proxyStore.getRootField('createPerson');
                const root = proxyStore.getRoot();
                const prevPeople = root.getLinkedRecords('people');
                prevPeople.push(newEdgeNode);
                root.setLinkedRecords(prevPeople,'people');
            }
            },
        );
    }
    handleChange(e){
        var value = e.target.value;
        var name = e.target.name;
        this.state[name] = value;
        this.setState(this.state);
    }
    render() {
       return (
       <MuiThemeProvider> 
       <QueryRenderer
            environment={root}
            query={graphql`
                query srcQuery {
                   people {
                        id,
                        firstName,
                        lastName,
                        avatar        
                    }
                }
            `}
            render={({error, props}) => {
                return(
                        <div>
                            <TextField hintText="First Name" name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
                            <TextField hintText="Last Name" name="lastName"  onChange={this.handleChange.bind(this)} value={this.state.lastName}/>
                            <RaisedButton label="Create" onClick={this.create.bind(this)}/>
                        <List>
                            {
                                error && <div>{error.message}</div>
                            }
                            {
                                (props &&
                                    props.people.map((item)=>{
                                    if(item && item.id)
                                    return (<ListItem id={item.id} key={item.id} primaryText={item.firstName + " "+ item.lastName} leftAvatar={<Avatar src={item.avatar}/>} rightIcon={<i className="material-icons" onClick={this.deletePerson.bind(this,item.id)}>delete_forever</i>}/>)
                                }) 
                                )
                            }
                            {!error && !props && <div><LinearProgress mode="indeterminate" /></div>}
                        </List>
                        <RaisedButton label="Create New Randomly" onClick={this.createRandomPerson.bind(this)}/>
                        </div>
                            )
            }}
       />
       </MuiThemeProvider> )
    }
}

ReactDOM.render(<App/>,document.getElementById('container'));