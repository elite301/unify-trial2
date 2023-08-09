import { useEffect, useState } from "react";
import { getInvites } from "apis/users";
import { Invite } from "types/Invite";

export const useGetInvites = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<Invite[]>([]);

  useEffect(() => {
    getInvites().then((data) => {
      setLoading(false);
      setData(data as Invite[]);
    }).catch(err => {
      setError(err);
      setLoading(false);
    });
  }, [])

  return { loading, data, error }
}