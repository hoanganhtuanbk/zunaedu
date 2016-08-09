import React from 'react';
import {render} from 'react-dom';

export class ServicePage extends React.Component{
	render(){
		return (
			<div className="container">
        <section className="section	">
          <div >
          <h1>Pub/Sub</h1>
            <h2>Common scenarios</h2>
            <p>Here are some classic use cases for Pub/Sub:</p>
            <ul>
                <li><b>Balancing workloads in network clusters.</b> For example, a large queue of tasks can be efficiently distributed among multiple workers.</li>
                <li><b>Implementing asynchronous workflows.</b> For example, an order processing application can place an order on a topic, from which it can be processed by one or more workers.</li>
                <li><b>Distributing event notifications.</b> For example, a service that accepts user signups can send notifications whenever a new user registers, and downstream services can subscribe to receive notifications of the event.</li>
                <li><b>Refreshing distributed caches.</b> For example, an application can publish invalidation events to update the IDs of objects that have changed. </li>
                <li><b>Logging to multiple systems.</b> For example, a Google Compute Engine instance can write logs to the monitoring system, to a database for later querying, and so on.
               </li><li><b>Data streaming from various processes or devices.</b> For example, a residential sensor can stream data to backend servers hosted in the cloud.</li>
                <li><b>Reliability improvement.</b> For example, a single-zone Compute Engine service can operate in additional zones by subscribing to a common topic, to recover from failures in a zone or region.</li>
              </ul>
              <h2>Benefits and features</h2>
              <ul>
              <li><b>Unified messaging:</b> Durability and low-latency delivery in a single product</li>
              <li><b>Global presence:</b> Connect services located anywhere in the world
              </li><li><b>Flexible delivery options:</b> Both push- and pull-style subscriptions supported</li>
              <li><b>Data reliability:</b> Replicated storage and guaranteed at-least-once message delivery</li>
              <li><b>End-to-end reliability:</b> Explicit application-level acknowledgement</li>
              <li><b>Data security and protection:</b> Encryption of data on the wire and at rest</li>
              <li><b>Flow control:</b> Dynamic rate limiting implemented by the Pub/Sub system</li>
              <li><b>Simplicity:</b> Easy-to-use REST/JSON API</li>
              </ul>
              <h2>Pub/Sub concepts and message flow</h2>
              <p>Here is an overview of the components in the Pub/Sub system and how messages flow between them:</p>
              <img src="https://cloud.google.com/pubsub/images/pub_sub_flow.png" alt=""/>
              <ol>
              <li>A <a href="#endpoints"><em>publisher</em> application</a> creates a <em>topic</em> in the Pub/Sub service and sends <em>messages</em> to the topic. A message contains a payload and optional <em>attributes</em> that describe the payload content. </li>
              <li>Messages are persisted in a <em>message store</em> until they are delivered and acknowledged by subscribers.
              </li>
              <li>The Pub/Sub service forwards messages from a topic to all of its subscriptions, individually.
                Each subscription receives messages either by Pub/Sub <em>pushing</em> them to the subscriber's chosen endpoint, or by the subscriber <em>pulling</em> them from the service.
              </li><li>The subscriber receives pending messages from its subscription and acknowledges each one to the Pub/Sub service. </li>
              <li>When a message is acknowledged by the subscriber, it is removed from the subscription's queue of messages.</li>
              </ol>
          </div>
        </section>
        <section>
          <h2>How to demo</h2>
          <ul>
            <li>
              <h3>For Guests </h3>
              <ol>
                <li>Go to the demo page</li>
                <li>Copy/Past <b>Test</b> to the <i>clientId</i> and
                  the <i>clientSecret</i> form
                </li>
                <li>To subscribe to a topic, in the Subscribe field, type that topic and click on
                  subscribe button
                </li>
                <li>To publish a message to a topic, fill the forms in Public field and click on publish button</li>
              </ol>
            </li>
            <li>
              <h3>
                For registered user, if you want to test your own app, login to your dashboard
              </h3>
              <ol>
                <li>
                  Go to app management, create an app and do not forget to enable pubsub service
                </li>
                <li>
                  After creating an app, we will provide a <i>ClientId</i> and a <i>ClientSecret</i> in the Credentials tab of your app,
                  Copy and Paste them to the Credential view in the demo and click on submit button
                </li>
                <li>
                  And then you can publish and subscribe like guests
                </li>
              </ol>
            </li>
          </ul>
        </section>
			</div>
		);
	}
}
