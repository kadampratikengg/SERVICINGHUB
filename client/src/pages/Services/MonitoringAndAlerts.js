import React from 'react';

const MonitoringAndAlerts = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>Monitoring & Alerts</h2>
          <p>Prometheus, Grafana</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>We set up comprehensive monitoring and alerting systems to give you real-time visibility into your application's health and performance. Proactively identify and resolve issues before they impact your users.</p>
          <h4>Our Monitoring Stack:</h4>
          <ul>
            <li><strong>Prometheus:</strong> For time-series data collection and metrics.</li>
            <li><strong>Grafana:</strong> For creating beautiful and insightful dashboards.</li>
            <li><strong>Alertmanager:</strong> For handling and routing alerts to your team.</li>
            <li>Custom dashboard creation and alert rule configuration</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MonitoringAndAlerts;