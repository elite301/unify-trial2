import { useEffect, useState } from "react";
import { getTeamMembers } from "apis/users";
import { TeamMember } from "types/UserTypes";

export const useGetTeamMembers = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<TeamMember[]>([]);

  useEffect(() => {
    getTeamMembers().then((data) => {
      setLoading(false);
      setData(data as TeamMember[]);
    }).catch(err => {
      setError(err);
      setLoading(false);
    });
  }, [])

  return { loading, data, error }
}