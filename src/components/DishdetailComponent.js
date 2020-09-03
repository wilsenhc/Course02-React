import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        let options = { year: 'numeric', month: 'short', day: 'numeric' };

        if (comments != null) {
            const commentList = comments.map((comment) => {
                return (<li>
                    <p>{ comment.comment }</p>
                    <p>-- { comment.author}, { (new Date(comment.date)).toLocaleDateString('en-US', options) }</p>
                </li>);
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { commentList }
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-5 m-1">
                    { this.renderDish(this.props.dish) }
                </div>
                <div className="col-md-5 m-1">
                    { this.renderComments(this.props.dish ? this.props.dish.comments : []) }
                </div>
            </div>
        )
    }
}

export default DishDetail;