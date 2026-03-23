export default function About() {
  return (
    <div style={{ maxWidth: '1800px', margin: '0 auto', padding: '16rem 2rem' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-headline)', 
        fontSize: '5rem',
        fontWeight: '400',
        color: 'var(--color-text-primary)',
        marginBottom: '1rem',
        lineHeight: 1.2
      }}>
        About
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        Neo-Slow is a platform for cultivating unrealized ideas in art, technology, and research.
      </p>

      {/* Introduction Section */}
      <section style={{
        marginBottom: '8rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '3rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '3rem'
        }}>
          Introduction
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem'
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.5rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}>
              In a world that accelerates relentlessly toward completion, Neo-Slow creates space for ideas that exist between conception and realization. We believe that the most valuable concepts often require time to mature, and that the pressure to immediately execute can kill the delicate germination of innovation.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.5rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              This platform serves as a seed bank for cultural potential—a place where ideas can be preserved, shared, and allowed to develop according to their own timing rather than market demands or productivity metrics.
            </p>
          </div>
          <div style={{
            padding: '3rem',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem'
            }}>
              Our Mission
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.5rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              To create a sanctuary for unrealized ideas, fostering a culture that values the process of thinking as much as the products of thought.
            </p>
          </div>
        </div>
      </section>

      {/* Why Unrealized Ideas Matter */}
      <section style={{
        marginBottom: '8rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '3rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '3rem'
        }}>
          Why Unrealized Ideas Matter
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          <div style={{
            padding: '2rem',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.8rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem'
            }}>
              Potential Energy
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.3rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              Unrealized ideas represent stored creative potential that can inspire future work and cross-pollinate across disciplines.
            </p>
          </div>
          
          <div style={{
            padding: '2rem',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.8rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem'
            }}>
              Process Over Product
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.3rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              The journey of conceptual development often holds more value than the final implementation, teaching us how to think and explore.
            </p>
          </div>
          
          <div style={{
            padding: '2rem',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: '8px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '1.8rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem'
            }}>
              Cultural Memory
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.3rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              Preserving the landscape of what could have been helps us understand our cultural values and the roads not taken.
            </p>
          </div>
        </div>
      </section>

      {/* Neo-Slow as Seed Bank */}
      <section style={{
        marginBottom: '8rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '3rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '3rem'
        }}>
          Neo-Slow as Seed Bank for Culture
        </h2>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Like agricultural seed banks that preserve genetic diversity for future generations, Neo-Slow preserves conceptual diversity for future cultural evolution.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            We store ideas not as failures to be completed, but as genetic material that might combine in unexpected ways with future contexts, technologies, and needs.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Preservation
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Diversity
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Future Potential
            </span>
          </div>
        </div>
      </section>

      {/* Platform Logic */}
      <section style={{
        marginBottom: '8rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '3rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '3rem'
        }}>
          Platform Logic
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem'
            }}>
              Slow Technology
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.5rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              Our platform embraces slow technology principles—prioritizing reflection over immediacy, depth over breadth, and contemplation over constant notification.
            </p>
          </div>
          
          <div>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem'
            }}>
              Anti-Productivity
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.5rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              We reject the cult of productivity that demands every idea be optimized, monetized, or scaled. Some ideas exist simply to exist.
            </p>
          </div>
          
          <div>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem'
            }}>
              Collaborative Cultivation
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.5rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7
            }}>
              Ideas grow better when tended by multiple perspectives. Our platform encourages collaborative development without forcing consensus.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '3rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '2rem'
        }}>
          Join the Cultivation
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.5rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Neo-Slow is for artists, researchers, thinkers, and dreamers who understand that some ideas need time to grow. 
          Whether you have unrealized concepts to share or want to help tend the garden of potential, there's a place for you here.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <button style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.5rem',
            color: 'var(--color-text-primary)',
            backgroundColor: 'transparent',
            border: '1px solid var(--color-accent)',
            padding: '1.5rem 3rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Submit an Idea
          </button>
          <button style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            backgroundColor: 'transparent',
            border: '1px solid var(--color-border)',
            padding: '1.5rem 3rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Join Community
          </button>
        </div>
      </section>
    </div>
  );
}
