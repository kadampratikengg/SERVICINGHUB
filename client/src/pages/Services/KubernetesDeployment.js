import React from 'react';

const KubernetesDeployment = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>Kubernetes Deployment</h2>
          <p>Scalable microservices</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>We deploy and manage your containerized applications at scale using Kubernetes. Our expertise in container orchestration allows for automated scaling, self-healing, and efficient resource management for your microservices architecture.</p>
          <h4>Services Include:</h4>
          <ul>
            <li>Kubernetes cluster setup and configuration (EKS, GKE, AKS)</li>
            <li>Writing and managing Kubernetes manifests (Deployments, Services, etc.)</li>
            <li>Implementing auto-scaling and load balancing</li>
            <li>Monitoring and logging for containerized applications</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default KubernetesDeployment;