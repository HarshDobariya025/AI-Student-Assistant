import { UserProfile } from '@clerk/clerk-react'
import React from 'react'

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <UserProfile /> 
    </div>
  )
}

export default Profile