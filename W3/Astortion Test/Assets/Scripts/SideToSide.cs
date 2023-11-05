// namespace DefaultNamespaceusing UnityEngine;
using UnityEngine;
// using Mathf;
// using UnityEngine.Rendering.Universal;
// using System.Reflection;
// using System.Linq;

public class SideToSide : MonoBehaviour
{
    [SerializeField] private float speed;
    [SerializeField] private float amt;

    
    void Update()
    {
        transform.position = new Vector3(Mathf.Sin(Time.time*speed)*amt, 0, 0);
    }
}