import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'

// components
import ProjectList from '../../components/ProjectList'
import ProjectFilter from './ProjectFilter'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Dashboard.css'

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('projects')
  const [filter, setFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }
  console.log(filter)

  const projects = documents ? documents.filter((doc) => {
    switch (filter) {
      case 'all':
        return true;
      case 'mine':
        let assignedToMe = false;
        doc.assignedUsersList.forEach(u => {
          if (u.id === user.uid) {
            assignedToMe = true;
          }
        });
        return assignedToMe
      case 'development':
        return doc.category === 'development'
      case 'design':
        return doc.category === 'design'
      case 'marketing':
        return doc.category === 'marketing'
      case 'sales':
        return doc.category === 'sales'
      default:
        return true
    }
  }) : null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter changeFilter={changeFilter} />}
      {projects && <ProjectList projects={projects} />}
    </div>
  )
}